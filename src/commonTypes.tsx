export type MenuItemType = {
    name: string;
    type: string;
    price: number;
    original_price?: number;
    ingredients: string;
    description: string;
    pairings: string;
    text: string;
    size: string;
    id: string;
    item: string;
    is_available: string | boolean;
    image_url: string | boolean;
}

export type MenuTypeType = {
    name: string;
    title: string;
    items: MenuItemType[];
}

export type StaffItemType = {
    id: number;
    name: string;
    positions: string[];
    admin: boolean;
    is_enabled: boolean;
    is_deleted: boolean;
    bio: string;
    hired_date: string;
    gender: string;
    title: string;
    image_url: null | string;
}

export type ImageType = {
    name: string,
    url: string,
    format?: string
}

export type OpeningType = {
    date: string,
    event: string,
    active: string | boolean,
    id: string
}


