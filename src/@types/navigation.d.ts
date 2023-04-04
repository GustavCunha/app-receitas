import { CardProps } from "../components/Card";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            HomeTab: undefined;
            Home: undefined;
            Detail: {
                data: CardProps
            };
            Search: undefined;
            Favorite: undefined;
        }
    }
}