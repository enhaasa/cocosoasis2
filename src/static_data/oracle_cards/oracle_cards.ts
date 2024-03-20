export type Card = {
    name: string;
    description: string;
    cards: number;
    price: number;
}

const cards: Card[] = [
    {
        name: 'Basic Reading',
        description: 'Receive a general message or advice tailored to your current situation or question.',
        cards: 2,
        price: 100000
    }, {
        name: 'Past Lives',
        description: 'Delve into karmic memories or explore professional paths influenced by your past lives.',
        cards: 3,
        price: 150000
    }, {
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
        name: 'Love & Other Relationship',
        description: 'Receive a comprehensive analysis and evolutionary perspective on your relationships, filled with detailed insights.',
        cards: 8,
        price: 400000
    }
]

export default cards;