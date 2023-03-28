export type MenuItem = {
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
}

export type MenuTypeType = {
    name: string;
    text: string;
    items: MenuItem[];
}

export type StaffItemType = {
    name: string;
    positions: string[];
    admin: boolean;
    isActive: boolean;
    bio: string;
    hiredDate: string;
}


