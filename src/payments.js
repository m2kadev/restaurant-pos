import Cash from "./components/orders/payment/Cash";
import CreditCard from "./components/orders/payment/CreditCard";
import Paypel from "./components/orders/payment/Paypel";

export const payments = [
    {
        title: 'Credit Card',
        value: 'credit_card',
        img: './payments/credit.svg',
        element: <CreditCard />
    },
    {
        title: 'Paypel',
        value: 'paypel',
        img: './payments/paypel.svg',
        element: <Paypel />
    },
    {
        title: 'Cash',
        value: 'cash',
        img: './payments/cash.svg',
        element: <Cash />
    }
]