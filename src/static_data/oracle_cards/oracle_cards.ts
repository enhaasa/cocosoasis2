export type Card = {
    name: string;
    description: string;
    cards: number;
    price: number;
}

const cards: Card[] = [
    {
        name: 'Messages From Your Soul',
        description: 'Discover the messages your soul is urging you to reconnect with, illuminating paths for personal growth.',
        cards: 3,
        price: 150000
    }, {
        name: 'Past Lives (Relationships)',
        description: 'Uncover the karmic balance sheet of your relationship or journey through a past life relationship from its beginning to end.',
        cards: 3,
        price: 150000
    }, {
        name: 'Lenormand Reading',
        description: 'A detailed answer to your precise, practical question about romance, work or your everyday life.',
        cards: 5,
        price: 250000
    }
]

export default cards;