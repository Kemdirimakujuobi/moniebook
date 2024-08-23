document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newItemForm');
    const closeButton = document.getElementById('closeButton');
    const itemTypeSelector = document.getElementById('itemTypeSelector');
    const standardForm = document.getElementById('standardForm');
    const variableForm = document.getElementById('variableForm');
    const sellPriceInput = document.getElementById('sellPrice');
    const costPriceInput = document.getElementById('costPrice');
    const priceWidget = document.getElementById('priceWidget');
    const profitLossLabel = document.getElementById('profitLossLabel');
    const profitLossText = document.getElementById('profitLossText');
    const profitLossAmount = document.getElementById('profitLossAmount');
    const addVariantsBtn = document.getElementById('addVariantsBtn');

    // Close Button Functionality
    closeButton.addEventListener('click', function () {
        console.log('Close button clicked');
        alert('Form closed');
        // Implement actual close functionality here
    });

    // Item Type Selector Functionality
    itemTypeSelector.addEventListener('change', function (event) {
        if (event.target.type === 'radio') {
            const selectedType = event.target.value;
            if (selectedType === 'standard') {
                standardForm.classList.remove('hidden');
                variableForm.classList.add('hidden');
            } else if (selectedType === 'variable') {
                standardForm.classList.add('hidden');
                variableForm.classList.remove('hidden');
            }
        }
    });

    // Profit/Loss Calculation Functionality
    function calculateProfit() {
        const sellPrice = parseFloat(sellPriceInput.value) || 0;
        const costPrice = parseFloat(costPriceInput.value) || 0;

        if (sellPrice > 0 && costPrice > 0) {
            const difference = sellPrice - costPrice;
            const formattedDifference = Math.abs(difference).toLocaleString('en-NG', {
                style: 'currency',
                currency: 'NGN',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).replace('NGN', '₦');

            priceWidget.classList.remove('hidden');
            priceWidget.classList.add('visible');

            if (difference > 0) {
                profitLossLabel.textContent = 'PROFIT';
                profitLossLabel.classList.remove('loss');
                profitLossText.textContent = 'profit';
            } else if (difference < 0) {
                profitLossLabel.textContent = 'LOSS';
                profitLossLabel.classList.add('loss');
                profitLossText.textContent = 'loss';
            } else {
                priceWidget.classList.remove('visible');
                priceWidget.classList.add('hidden');
                return;
            }

            profitLossAmount.textContent = formattedDifference;
        } else {
            priceWidget.classList.remove('visible');
            setTimeout(() => {
                priceWidget.classList.add('hidden');
            }, 300);
        }
    }

    sellPriceInput.addEventListener('input', calculateProfit);
    costPriceInput.addEventListener('input', calculateProfit);


        // Add Variants Button Functionality
    addVariantsBtn.addEventListener('click', function () {
        alert('Add variants functionality to be implemented');
    });

        // Form Submission Handling
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');
        alert('Item saved successfully!');
        // Add form submission logic here
    });
});