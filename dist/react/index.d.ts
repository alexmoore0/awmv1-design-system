import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type HTMLAttributes, type InputHTMLAttributes, type LabelHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
export type AWMSize = 'sm' | 'md' | 'lg';
export type AWMIntent = 'accent' | 'success' | 'warning' | 'danger';
export type ButtonVariant = 'primary' | 'secondary' | 'ink' | 'ghost' | 'danger';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: AWMSize;
    block?: boolean;
    iconOnly?: boolean;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    muted?: boolean;
}
export declare const Link: import("react").ForwardRefExoticComponent<LinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
    label?: ReactNode;
    htmlFor?: string;
    hint?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}
export declare function Field({ label, htmlFor, hint, error, required, labelProps, className, children, ...props }: FieldProps): import("react").JSX.Element;
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    error?: boolean;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
    affix?: ReactNode;
}
export declare function InputGroup({ affix, className, children, ...props }: InputGroupProps): import("react").JSX.Element;
export interface CheckProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const Radio: import("react").ForwardRefExoticComponent<CheckProps & import("react").RefAttributes<HTMLInputElement>>;
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
}
export declare const Switch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<HTMLInputElement>>;
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    flush?: boolean;
    hover?: boolean;
}
export declare function Card({ flush, hover, className, ...props }: CardProps): import("react").JSX.Element;
export declare function CardEyebrow({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react").JSX.Element;
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    serif?: boolean;
}
export declare function CardTitle({ serif, className, ...props }: CardTitleProps): import("react").JSX.Element;
export declare function CardBody({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react").JSX.Element;
export type BadgeVariant = 'default' | AWMIntent | 'ink';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    dot?: boolean;
}
export declare function Badge({ variant, dot, className, children, ...props }: BadgeProps): import("react").JSX.Element;
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    accent?: boolean;
    onRemove?: () => void;
    removeLabel?: string;
}
export declare function Tag({ accent, onRemove, removeLabel, className, children, ...props }: TagProps): import("react").JSX.Element;
export declare function Tabs({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function TabList({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}
export declare const Tab: import("react").ForwardRefExoticComponent<TabProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare function Segmented({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export interface SegmentedItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}
export declare const SegmentedItem: import("react").ForwardRefExoticComponent<SegmentedItemProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare function Breadcrumbs({ className, ...props }: HTMLAttributes<HTMLElement>): import("react").JSX.Element;
export declare function BreadcrumbSeparator({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>): import("react").JSX.Element;
export declare function Menu({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    danger?: boolean;
    meta?: ReactNode;
    icon?: ReactNode;
}
export declare const MenuItem: import("react").ForwardRefExoticComponent<MenuItemProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare function MenuSeparator({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    placement?: TooltipPlacement;
}
export declare function Tooltip({ placement, className, ...props }: TooltipProps): import("react").JSX.Element;
export type AlertVariant = 'default' | AWMIntent;
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    variant?: AlertVariant;
    icon?: ReactNode;
    title?: ReactNode;
}
export declare function Alert({ variant, icon, title, className, children, ...props }: AlertProps): import("react").JSX.Element;
export declare function ModalScrim({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function Modal({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function ModalHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function ModalTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>): import("react").JSX.Element;
export declare function ModalBody({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function ModalFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    icon?: ReactNode;
    title?: ReactNode;
}
export declare function Toast({ icon, title, className, children, ...props }: ToastProps): import("react").JSX.Element;
export declare function TableWrap({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function Table({ className, ...props }: HTMLAttributes<HTMLTableElement>): import("react").JSX.Element;
export declare function Empty({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function EmptyIcon({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function EmptyTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>): import("react").JSX.Element;
export declare function EmptyBody({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react").JSX.Element;
export declare function EmptyActions({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
//# sourceMappingURL=index.d.ts.map