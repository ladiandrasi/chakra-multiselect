import { HTMLChakraProps, TagProps, StackProps, BoxProps, IconButtonProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { UseSelectProps } from './use-select';
export interface SelectItem {
    value: any;
    label?: string;
}
export interface SelectProps extends Omit<HTMLChakraProps<'select'>, 'value' | 'size' | 'onChange' | 'onSelect' | 'children'>, UseSelectProps {
    label?: string;
    children?: ReactNode;
}
export interface SelectControlProps extends Omit<HTMLChakraProps<'select'>, 'size'> {
    defaultIsOpen?: boolean;
    isLazy?: true;
    closeOnSelect?: false;
    children?: ReactNode;
}
export declare type SelectListProps = HTMLChakraProps<'ul'>;
export declare type SelectedListProps = BoxProps;
export declare type SelectLabelProps = HTMLChakraProps<'label'>;
export interface SelectActionGroupProps extends StackProps {
    clearButtonProps?: IconButtonProps;
    toggleButtonProps?: IconButtonProps;
}
export interface SelectOptionItemProps extends HTMLChakraProps<'li'> {
    highlighted?: boolean;
    label?: string;
    index: number;
    selected?: boolean;
    created?: boolean;
}
export interface SelectedItemProps extends TagProps, SelectItem {
}
export interface MultiSelectProps extends Omit<SelectProps, 'children'> {
    children?: ReactNode;
    labelProps?: SelectLabelProps;
    controlProps?: SelectControlProps;
    listProps?: SelectListProps;
    selectedListProps?: SelectedListProps;
    actionGroupProps?: SelectActionGroupProps;
}
export declare const ChakraSvg: import("@chakra-ui/system").ChakraComponent<"svg", {}>;
export declare const Select: import("react").NamedExoticComponent<SelectProps>;
export declare const SelectLabel: import("react").NamedExoticComponent<SelectLabelProps>;
export declare const SelectOptionLabel: import("react").NamedExoticComponent<StackProps & {
    label: string;
    created?: boolean | undefined;
}>;
export declare const SelectOptionItem: import("react").NamedExoticComponent<SelectOptionItemProps>;
export declare const EmptySelectResults: import("react").NamedExoticComponent<{
    label?: string | undefined;
}>;
export declare const SelectList: import("react").NamedExoticComponent<SelectListProps>;
export declare const SelectInput: import("react").NamedExoticComponent<object>;
export declare const SelectedItem: import("react").NamedExoticComponent<SelectedItemProps>;
export declare const SelectToggleButton: import("react").NamedExoticComponent<IconButtonProps>;
export declare const SelectClearButton: import("react").NamedExoticComponent<IconButtonProps>;
export declare const SelectedList: import("react").NamedExoticComponent<BoxProps>;
export declare const SelectActionGroup: import("react").NamedExoticComponent<SelectActionGroupProps>;
export declare const SelectControl: import("@chakra-ui/system").ComponentWithAs<"div", SelectControlProps>;
export declare const MultiSelect: FC<MultiSelectProps>;
