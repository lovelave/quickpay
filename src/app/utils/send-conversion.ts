const dataLayer = (window as any).dataLayer = (window as any).dataLayer || [];

function gtag(...args: any) {
    dataLayer.push(arguments);
}

(window as any).gtag = gtag;
gtag('js', new Date());
gtag('config', 'AW-645833390');

export function sendConversion(type: "registration" | "credit") {
    gtag('event', 'conversion', {
        'send_to': type === 'registration'
            ? 'AW-645833390/n6JJCMKdoNcBEK7F-rMC'
            : 'AW-645833390/KYWRCJmhoNcBEK7F-rMC',
    });
}
