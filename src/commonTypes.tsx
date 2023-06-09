export type MenuItemType = {
    name: string;
    type: string;
    price: number;
    ingredients: string;
    description: string;
    pairings: string;
    text: string;
    size: string;
    id: string;
    item: string;
    available: string | boolean;
    hasImage: string | boolean;
}

export type MenuTypeType = {
    name: string;
    title: string;
    items: MenuItemType[];
}

export type StaffItemType = {
    name: string;
    positions: string[];
    admin: boolean;
    isActive: boolean;
    bio: string;
    hiredDate: string;
    gender: string;
    title: string;
}

export type ImageType = {
    name: string,
    url: string,
    format: string
}

export type OpeningType = {
    date: string,
    event: string,
    active: string | boolean,
    id: string
}


