export interface iAppState {
    [tableId: number]: {
        searchOptions?: any;
        content?: any;
        totalElements?: number;
        totalPages?: number;
        loading: boolean;
        error: any;
        fetching: boolean;
    };
    toUpdateregister?: any;
    auth?: any
}