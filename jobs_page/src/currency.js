export const getCurrencySymbol = country => {
    const currencies = {
        gb: '£',
        us: '$',
        au: '$',
        ca: '$',
        eu: '€',
        fr: '€',
        nl: '€',
        de: '€',
        ie: '€',
    };
    return currencies[country];
}