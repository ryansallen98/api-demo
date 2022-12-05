const
    walletOpen = document.getElementById('button'),
    uri = 'https://bux.digital/v1/pay/?',
    params = {
        merchant_name: 'Slots Pardise',
        invoice: Math.floor(Math.random() * 1001),
        order_key: Math.floor(Math.random() * 1001),
        merchant_addr: 'ecash:qpujhpzn2prltsm8evglcz0q5tdzr90nkck7q842kv',
        amount: '1',
        offer_name: 'WELCOME1',
        offer_description: '2500-welcome-bonus',
        success_url: 'https://icore-payment-demo.netlify.app/signup',
        cancel_url: 'https://icore-payment-demo.netlify.app/signup',
        ipn_url: 'https://icore-payment-demo.netlify.app/signup',
        return_json: true
    };

button.onclick = () => {
    fetch('https://bux.digital/v1/pay/?' + new URLSearchParams(params).toString())
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            window.open(data.paymentUrl);
        })
        .catch((err) => {
            console.log('ERROR:', err.message);
        });
}

