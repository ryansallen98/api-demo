    const
        walletOpen = document.getElementById('walletOpen'),
        uri = 'https://bux.digital/v1/pay/?',
        params = {
            merchant_name: 'demo',
            invoice: '1',
            order_key: '99',
            merchant_addr: 'ecash:qpujhpzn2prltsm8evglcz0q5tdzr90nkck7q842kv',
            amount: '199',
            offer_name: 'demo-offer',
            offer_description: 'demo-desc',
            success_url: 'https://google.com',
            cancel_url: 'https://bing.com',
            ipn_url: 'https://google.com',
            return_json: true
        };

    walletOpen.onclick = () => {
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
    