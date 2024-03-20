export type ServiceType = 'paid' | 'included';

export type Service = {
    header: string;
    undertitle: string;
    icon?: string;
    image?: string;
    body: JSX.Element | string;
    footer?: JSX.Element | string;
    type: ServiceType;
    available: boolean;
}