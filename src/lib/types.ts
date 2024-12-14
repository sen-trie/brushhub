export interface Artwork {
    id: number;
    artist: number;
    imgSrc: string;
    tags: string[];
    title?: string;
    description?: string;
    datePosted?: string;
}

export interface Service {
    id: number;
    artistId: number;
    state: string;
    isOpen: boolean;
    title: string;
    description: string;
    thumbnail: string;
    samples: number[];
    tags: string[];
    types: {
        name: string;
        price: number;
        description: string;
    }[];
    extras: {
        name: string;
        type: string;
        price: number;
        description: string;
    }[];
    fastDelivery: {
        enabled: boolean;
        duration: number;
        unit: string;
        price: number;
    };
    commercialUse: {
        enabled: boolean;
        price: number;
        type: string;
    };
    milestones: {
        name: string;
        duration: {
            value: number;
            unit: string;
        } | null;
        payment?: number;
    }[];
    termsOfService: {
        title: boolean;
    };
    uniqueTos: {
        title: string;
        details: string;
    }[];
}

export interface CommissionChoice {
    brief: string;
    deadline: string;
    extras: boolean[];
    images: string[];
    selectedTier: number;
}
