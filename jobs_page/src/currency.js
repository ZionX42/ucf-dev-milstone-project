// Displaying local currency in search results

export const extractFormData = form => Array
.from(form.elements)
.reduce((acc, { id, value }) => ({ [id]: value, ...acc }), {});

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