export declare const sizes: {
    sm: {
        control: {
            minH: number;
            px: number;
            spacing: number;
        };
        input: {
            m: string;
        };
        actionGroup: {
            spacing: string;
        };
        item: {
            py: number;
            px: number;
        };
        textList: {
            py: number;
            px: number;
        };
        selectedItem: {
            m: string;
        };
        selectedList: {
            py: string;
        };
        groupTitle: {
            mx: number;
            my: number;
            fontSize: string;
        };
    };
    md: {
        control: {
            minH: number;
            px: number;
            spacing: number;
        };
        input: {
            m: string;
        };
        actionGroup: {
            spacing: string;
        };
        item: {
            py: number;
            px: number;
        };
        textList: {
            p: number;
        };
        selectedItem: {
            m: string;
        };
        selectedList: {
            py: string;
        };
        groupTitle: {
            mx: number;
            my: number;
            fontSize: string;
        };
    };
    lg: {
        control: {
            minH: number;
            px: number;
            spacing: number;
        };
        input: {
            m: number;
        };
        actionGroup: {
            spacing: string;
        };
        item: {
            py: number;
            px: number;
        };
        textList: {
            py: number;
            px: number;
        };
        selectedItem: {
            m: number;
        };
        selectedList: {
            py: number;
        };
        groupTitle: {
            mx: number;
            my: number;
            fontSize: string;
        };
    };
};
declare const _default: {
    defaultProps: {
        size: string;
    };
    parts: string[];
    sizes: {
        sm: {
            control: {
                minH: number;
                px: number;
                spacing: number;
            };
            input: {
                m: string;
            };
            actionGroup: {
                spacing: string;
            };
            item: {
                py: number;
                px: number;
            };
            textList: {
                py: number;
                px: number;
            };
            selectedItem: {
                m: string;
            };
            selectedList: {
                py: string;
            };
            groupTitle: {
                mx: number;
                my: number;
                fontSize: string;
            };
        };
        md: {
            control: {
                minH: number;
                px: number;
                spacing: number;
            };
            input: {
                m: string;
            };
            actionGroup: {
                spacing: string;
            };
            item: {
                py: number;
                px: number;
            };
            textList: {
                p: number;
            };
            selectedItem: {
                m: string;
            };
            selectedList: {
                py: string;
            };
            groupTitle: {
                mx: number;
                my: number;
                fontSize: string;
            };
        };
        lg: {
            control: {
                minH: number;
                px: number;
                spacing: number;
            };
            input: {
                m: number;
            };
            actionGroup: {
                spacing: string;
            };
            item: {
                py: number;
                px: number;
            };
            textList: {
                py: number;
                px: number;
            };
            selectedItem: {
                m: number;
            };
            selectedList: {
                py: number;
            };
            groupTitle: {
                mx: number;
                my: number;
                fontSize: string;
            };
        };
    };
    baseStyle: (props: Record<string, any>) => {
        list: {
            bg: string;
            boxShadow: string;
            color: string;
            w: string;
            py: string;
            zIndex: number;
            borderRadius: string;
            borderWidth: string;
            maxH: string;
            overflowY: string;
            overscrollBehaviorY: string;
        };
        selectedList: {
            d: string;
            flex: number;
            flexWrap: string;
            alignItems: string;
        };
        item: {
            cursor: string;
            transition: string;
            _focus: {
                bg: string;
                boxShadow: string;
            };
            _active: {
                bg: string;
            };
            _expanded: {
                bg: string;
            };
            _selected: {
                bg: string;
            };
            _disabled: {
                opacity: number;
                cursor: string;
            };
        };
        selectedItem: {
            borderRadius: string;
            variant: string;
            colorscheme: any;
        };
        button: {
            variant: string;
            _hover: {
                bg: string;
            };
            _focus: {
                bg: string;
                boxShadow: string;
            };
            _active: {
                bg: string;
            };
            colorscheme: any;
        };
        actionGroup: {
            d: string;
            alignItems: string;
        };
        control: {
            h: string;
            minW: number;
        };
        input: {
            bgColor: string;
            appearance: string;
            flex: number;
            outline: number;
        };
        groupTitle: {
            fontWeight: string;
        };
        divider: {
            d: string;
            h: string;
            border: number;
            borderColor: string;
            my: number;
            opacity: number;
        };
        label: {
            fontSize: string;
            marginEnd: number;
            mb: number;
            fontWeight: string;
            transition: string;
            opacity: number;
            _disabled: {
                opacity: number;
            };
        };
    };
};
export default _default;
