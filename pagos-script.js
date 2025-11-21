// ===== Data =====
const accountData = {
    accountNumber: 'CHV-2024-001234',
    name: 'Juan Carlos Pérez García',
    address: 'Av. América Sur 2350, Trujillo, La Libertad',
    phone: '+51 987 654 321',
    email: 'juan.perez@email.com',
    hectares: 5.5
};

let billsData = [
    {
        id: 1,
        month: 'Diciembre 2024',
        amount: 450.00,
        dueDate: '2024-12-15',
        status: 'pending',
        consumption: 1250,
        period: '01/12/2024 - 31/12/2024'
    },
    {
        id: 2,
        month: 'Noviembre 2024',
        amount: 420.00,
        dueDate: '2024-11-15',
        status: 'pending',
        consumption: 1180,
        period: '01/11/2024 - 30/11/2024'
    },
    {
        id: 3,
        month: 'Octubre 2024',
        amount: 480.00,
        dueDate: '2024-10-15',
        status: 'paid',
        consumption: 1320,
        period: '01/10/2024 - 31/10/2024',
        paidDate: '2024-10-12'
    },
    {
        id: 4,
        month: 'Septiembre 2024',
        amount: 390.00,
        dueDate: '2024-09-15',
        status: 'paid',
        consumption: 1100,
        period: '01/09/2024 - 30/09/2024',
        paidDate: '2024-09-10'
    }
];

let selectedBills = [];
const COMMISSION_RATE = 0.025; // 2.5% commission

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    loadAccountInfo();
    loadPendingBills();
    loadBillHistory();
    initializeChart();
    updateDashboardStats();
});

// ===== Load Account Information =====
function loadAccountInfo() {
    document.getElementById('accountNumber').textContent = accountData.accountNumber;
    document.getElementById('accountName').textContent = accountData.name;
    document.getElementById('accountAddress').textContent = accountData.address;
    document.getElementById('accountPhone').textContent = accountData.phone;
    document.getElementById('accountEmail').textContent = accountData.email;
    document.getElementById('accountHectares').textContent = accountData.hectares + ' ha';
}

// ===== Load Pending Bills =====
function loadPendingBills() {
    const pendingBills = billsData.filter(bill => bill.status === 'pending');
    const billsList = document.getElementById('billsList');

    if (pendingBills.length === 0) {
        billsList.innerHTML = '<div class="alert alert-success">No tienes recibos pendientes de pago.</div>';
        return;
    }

    billsList.innerHTML = pendingBills.map(bill => `
        <div class="card mb-3 bill-item">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <input type="checkbox" class="form-check-input" id="bill-${bill.id}"
                               onchange="toggleBillSelection(${bill.id})">
                    </div>
                    <div class="col">
                        <h3 class="card-title mb-1">${bill.month}</h3>
                        <div class="text-muted">
                            <small>Período: ${bill.period}</small><br>
                            <small>Consumo: ${bill.consumption} m³</small>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="text-end">
                            <div class="h2 mb-0 text-primary">S/ ${bill.amount.toFixed(2)}</div>
                            <small class="text-muted">Vence: ${formatDate(bill.dueDate)}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Load Bill History =====
function loadBillHistory() {
    const paidBills = billsData.filter(bill => bill.status === 'paid');
    const historyList = document.getElementById('billHistory');

    if (paidBills.length === 0) {
        historyList.innerHTML = '<div class="alert alert-info">No hay historial de pagos.</div>';
        return;
    }

    historyList.innerHTML = paidBills.map(bill => `
        <div class="card mb-3">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="card-title mb-1">${bill.month}</h3>
                        <div class="text-muted">
                            <small>Período: ${bill.period}</small><br>
                            <small>Consumo: ${bill.consumption} m³</small><br>
                            <small class="text-success">Pagado: ${formatDate(bill.paidDate)}</small>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="text-end">
                            <div class="h3 mb-0">S/ ${bill.amount.toFixed(2)}</div>
                            <button class="btn btn-sm btn-outline-primary mt-2" onclick="downloadReceipt(${bill.id})">
                                <i class="fas fa-download me-1"></i> Descargar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Toggle Bill Selection =====
function toggleBillSelection(billId) {
    const checkbox = document.getElementById(`bill-${billId}`);
    const bill = billsData.find(b => b.id === billId);

    if (checkbox.checked) {
        selectedBills.push(bill);
    } else {
        selectedBills = selectedBills.filter(b => b.id !== billId);
    }

    updateCartSummary();
}

// ===== Update Cart Summary =====
function updateCartSummary() {
    const cartItems = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('subtotal');
    const commissionEl = document.getElementById('commission');
    const totalEl = document.getElementById('total');
    const payButton = document.getElementById('payButton');

    if (selectedBills.length === 0) {
        cartItems.innerHTML = '<div class="text-muted text-center py-4">No hay recibos seleccionados</div>';
        subtotalEl.textContent = 'S/ 0.00';
        commissionEl.textContent = 'S/ 0.00';
        totalEl.textContent = 'S/ 0.00';
        payButton.disabled = true;
        return;
    }

    const subtotal = selectedBills.reduce((sum, bill) => sum + bill.amount, 0);
    const commission = subtotal * COMMISSION_RATE;
    const total = subtotal + commission;

    cartItems.innerHTML = selectedBills.map(bill => `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
                <strong>${bill.month}</strong><br>
                <small class="text-muted">${bill.period}</small>
            </div>
            <div class="text-end">
                <strong>S/ ${bill.amount.toFixed(2)}</strong>
            </div>
        </div>
    `).join('');

    subtotalEl.textContent = `S/ ${subtotal.toFixed(2)}`;
    commissionEl.textContent = `S/ ${commission.toFixed(2)}`;
    totalEl.textContent = `S/ ${total.toFixed(2)}`;
    payButton.disabled = false;
}

// ===== Process Payment =====
function processPayment() {
    if (selectedBills.length === 0) {
        showNotification('Por favor selecciona al menos un recibo', 'warning');
        return;
    }

    const subtotal = selectedBills.reduce((sum, bill) => sum + bill.amount, 0);
    const commission = subtotal * COMMISSION_RATE;
    const total = subtotal + commission;

    // Update confirmation modal
    document.getElementById('confirmSubtotal').textContent = `S/ ${subtotal.toFixed(2)}`;
    document.getElementById('confirmCommission').textContent = `S/ ${commission.toFixed(2)}`;
    document.getElementById('confirmTotal').textContent = `S/ ${total.toFixed(2)}`;
    document.getElementById('confirmBillCount').textContent = selectedBills.length;

    // Show confirmation modal
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmPaymentModal'));
    confirmModal.show();
}

// ===== Confirm Payment =====
function confirmPayment() {
    // Hide confirmation modal
    const confirmModal = bootstrap.Modal.getInstance(document.getElementById('confirmPaymentModal'));
    confirmModal.hide();

    // Simulate payment processing
    setTimeout(() => {
        // Mark selected bills as paid
        const today = new Date().toISOString().split('T')[0];
        selectedBills.forEach(bill => {
            const billIndex = billsData.findIndex(b => b.id === bill.id);
            billsData[billIndex].status = 'paid';
            billsData[billIndex].paidDate = today;
        });

        // Clear selection
        selectedBills = [];

        // Reload data
        loadPendingBills();
        loadBillHistory();
        updateCartSummary();
        updateDashboardStats();

        // Show success modal
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        showNotification('¡Pago procesado exitosamente!', 'success');
    }, 1000);
}

// ===== Update Dashboard Stats =====
function updateDashboardStats() {
    const pendingBills = billsData.filter(bill => bill.status === 'pending');
    const paidBills = billsData.filter(bill => bill.status === 'paid');

    const totalPending = pendingBills.reduce((sum, bill) => sum + bill.amount, 0);
    const totalPaid = paidBills.reduce((sum, bill) => sum + bill.amount, 0);
    const avgConsumption = billsData.reduce((sum, bill) => sum + bill.consumption, 0) / billsData.length;

    document.getElementById('pendingAmount').textContent = `S/ ${totalPending.toFixed(2)}`;
    document.getElementById('paidCount').textContent = paidBills.length;
    document.getElementById('avgConsumption').textContent = `${Math.round(avgConsumption)} m³`;
}

// ===== Initialize Chart =====
function initializeChart() {
    const ctx = document.getElementById('consumptionChart');
    if (!ctx) return;

    // Get last 6 months of data
    const chartData = billsData.slice(0, 6).reverse();

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.map(bill => bill.month.split(' ')[0]),
            datasets: [{
                label: 'Consumo (m³)',
                data: chartData.map(bill => bill.consumption),
                borderColor: '#065da5',
                backgroundColor: 'rgba(6, 93, 165, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + ' m³';
                        }
                    }
                }
            }
        }
    });
}

// ===== Download Receipt =====
function downloadReceipt(billId) {
    const bill = billsData.find(b => b.id === billId);
    if (!bill) return;

    // Create PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Header
    doc.setFillColor(4, 59, 93);
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('Chavimochic Marketplace', 105, 15, { align: 'center' });
    doc.setFontSize(12);
    doc.text('Recibo de Pago - Servicio de Agua', 105, 25, { align: 'center' });

    // Account info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(`Cuenta: ${accountData.accountNumber}`, 20, 50);
    doc.text(`Titular: ${accountData.name}`, 20, 57);
    doc.text(`Dirección: ${accountData.address}`, 20, 64);

    // Bill details
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Detalles del Recibo', 20, 80);

    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Período: ${bill.period}`, 20, 90);
    doc.text(`Mes: ${bill.month}`, 20, 97);
    doc.text(`Consumo: ${bill.consumption} m³`, 20, 104);
    doc.text(`Monto: S/ ${bill.amount.toFixed(2)}`, 20, 111);
    doc.text(`Fecha de Pago: ${formatDate(bill.paidDate)}`, 20, 118);

    // Status
    doc.setFillColor(34, 197, 94);
    doc.roundedRect(20, 130, 40, 10, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text('PAGADO', 40, 137, { align: 'center' });

    // Footer
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(8);
    doc.text('Este es un documento generado electrónicamente', 105, 280, { align: 'center' });
    doc.text('Chavimochic Marketplace - Sistema de Pagos', 105, 285, { align: 'center' });

    // Save PDF
    doc.save(`recibo-${bill.month.replace(' ', '-')}.pdf`);

    showNotification('Recibo descargado exitosamente', 'success');
}

// ===== Helper Functions =====
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed top-0 end-0 m-3`;
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <div class="flex-grow-1">${message}</div>
            <button type="button" class="btn-close" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
