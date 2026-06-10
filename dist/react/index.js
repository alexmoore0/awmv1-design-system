import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from 'react';
function cx(...classes) {
    return classes.filter(Boolean).join(' ');
}
export const Button = forwardRef(({ variant = 'secondary', size = 'md', block = false, iconOnly = false, className, ...props }, ref) => (_jsx("button", { ref: ref, className: cx('awm-btn', `awm-btn--${variant}`, size !== 'md' && `awm-btn--${size}`, block && 'awm-btn--block', iconOnly && 'awm-icon-btn', className), ...props })));
Button.displayName = 'Button';
export const Link = forwardRef(({ muted = false, className, ...props }, ref) => (_jsx("a", { ref: ref, className: cx('awm-link', muted && 'awm-link--muted', className), ...props })));
Link.displayName = 'Link';
export function Field({ label, htmlFor, hint, error, required = false, labelProps, className, children, ...props }) {
    return (_jsxs("div", { className: cx('awm-field', className), ...props, children: [label ? (_jsxs("label", { ...labelProps, className: cx('awm-label', labelProps?.className), htmlFor: htmlFor, children: [label, required ? _jsx("span", { className: "awm-req", children: "*" }) : null] })) : null, children, hint ? _jsx("span", { className: "awm-hint", children: hint }) : null, error ? _jsx("span", { className: "awm-error-text", children: error }) : null] }));
}
export const Input = forwardRef(({ error = false, className, ...props }, ref) => (_jsx("input", { ref: ref, className: cx('awm-input', error && 'is-error', className), ...props })));
Input.displayName = 'Input';
export const Textarea = forwardRef(({ error = false, className, ...props }, ref) => (_jsx("textarea", { ref: ref, className: cx('awm-textarea', error && 'is-error', className), ...props })));
Textarea.displayName = 'Textarea';
export const Select = forwardRef(({ error = false, className, ...props }, ref) => (_jsx("select", { ref: ref, className: cx('awm-select', error && 'is-error', className), ...props })));
Select.displayName = 'Select';
export function InputGroup({ affix, className, children, ...props }) {
    return (_jsxs("div", { className: cx('awm-input-group', className), ...props, children: [affix ? _jsx("span", { className: "awm-affix", children: affix }) : null, children] }));
}
export const Checkbox = forwardRef(({ label, className, children, ...props }, ref) => (_jsxs("label", { className: cx('awm-check', className), children: [_jsx("input", { ref: ref, type: "checkbox", ...props }), _jsx("span", { className: "awm-box", children: _jsx("svg", { viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "M2.5 6.5 5 9l4.5-5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), label ?? children] })));
Checkbox.displayName = 'Checkbox';
export const Radio = forwardRef(({ label, className, children, ...props }, ref) => (_jsxs("label", { className: cx('awm-check', 'awm-check--radio', className), children: [_jsx("input", { ref: ref, type: "radio", ...props }), _jsx("span", { className: "awm-box", children: _jsx("span", { className: "awm-dot" }) }), label ?? children] })));
Radio.displayName = 'Radio';
export const Switch = forwardRef(({ label, className, children, ...props }, ref) => (_jsxs("label", { className: cx('awm-switch', className), children: [_jsx("input", { ref: ref, type: "checkbox", ...props }), _jsx("span", { className: "awm-track", children: _jsx("span", { className: "awm-thumb" }) }), label ?? children] })));
Switch.displayName = 'Switch';
export function Card({ flush = false, hover = false, className, ...props }) {
    return _jsx("div", { className: cx('awm-card', flush && 'awm-card--flush', hover && 'awm-card--hover', className), ...props });
}
export function CardEyebrow({ className, ...props }) {
    return _jsx("p", { className: cx('awm-card__eyebrow', className), ...props });
}
export function CardTitle({ serif = false, className, ...props }) {
    return _jsx("h3", { className: cx('awm-card__title', serif && 'awm-card__title--serif', className), ...props });
}
export function CardBody({ className, ...props }) {
    return _jsx("p", { className: cx('awm-card__body', className), ...props });
}
export function Badge({ variant = 'default', dot = false, className, children, ...props }) {
    return (_jsxs("span", { className: cx('awm-badge', variant !== 'default' && `awm-badge--${variant}`, className), ...props, children: [dot ? _jsx("span", { className: "awm-badge__dot" }) : null, children] }));
}
export function Tag({ accent = false, onRemove, removeLabel = 'Remove tag', className, children, ...props }) {
    return (_jsxs("span", { className: cx('awm-tag', accent && 'awm-tag--accent', className), ...props, children: [children, onRemove ? (_jsx("button", { type: "button", className: "awm-tag__x", "aria-label": removeLabel, onClick: onRemove, children: _jsx("svg", { width: "9", height: "9", viewBox: "0 0 10 10", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "M2 2l6 6M8 2l-6 6", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }) }) })) : null] }));
}
export function Tabs({ className, ...props }) {
    return _jsx("div", { className: cx('awm-tabs', className), ...props });
}
export function TabList({ className, ...props }) {
    return _jsx("div", { className: cx('awm-tabs__list', className), role: "tablist", ...props });
}
export const Tab = forwardRef(({ active = false, className, ...props }, ref) => (_jsx("button", { ref: ref, type: "button", role: "tab", "aria-selected": active, className: cx('awm-tab', active && 'is-active', className), ...props })));
Tab.displayName = 'Tab';
export function Segmented({ className, ...props }) {
    return _jsx("div", { className: cx('awm-segmented', className), role: "group", ...props });
}
export const SegmentedItem = forwardRef(({ active = false, className, ...props }, ref) => (_jsx("button", { ref: ref, type: "button", "aria-pressed": active, className: cx('awm-segmented__item', active && 'is-active', className), ...props })));
SegmentedItem.displayName = 'SegmentedItem';
export function Breadcrumbs({ className, ...props }) {
    return _jsx("nav", { className: cx('awm-breadcrumbs', className), "aria-label": "Breadcrumb", ...props });
}
export function BreadcrumbSeparator({ className, children = '/', ...props }) {
    return (_jsx("span", { className: cx('awm-breadcrumbs__sep', className), ...props, children: children }));
}
export function Menu({ className, ...props }) {
    return _jsx("div", { className: cx('awm-menu', className), ...props });
}
export const MenuItem = forwardRef(({ active = false, danger = false, meta, icon, className, children, ...props }, ref) => (_jsxs("button", { ref: ref, type: "button", className: cx('awm-menu__item', active && 'is-active', danger && 'is-danger', className), ...props, children: [icon ? _jsx("span", { className: "awm-menu__icon", children: icon }) : null, children, meta ? _jsx("span", { className: "awm-menu__meta", children: meta }) : null] })));
MenuItem.displayName = 'MenuItem';
export function MenuSeparator({ className, ...props }) {
    return _jsx("div", { className: cx('awm-menu__sep', className), ...props });
}
export function Tooltip({ placement = 'top', className, ...props }) {
    return _jsx("div", { className: cx('awm-tooltip', `awm-tooltip--${placement}`, className), role: "tooltip", ...props });
}
export function Alert({ variant = 'default', icon, title, className, children, ...props }) {
    return (_jsxs("div", { className: cx('awm-alert', variant !== 'default' && `awm-alert--${variant}`, className), role: "status", ...props, children: [icon ? _jsx("span", { className: "awm-alert__icon", children: icon }) : null, _jsxs("div", { children: [title ? _jsx("strong", { className: "awm-alert__title", children: title }) : null, children ? _jsx("p", { className: "awm-alert__body", children: children }) : null] })] }));
}
export function ModalScrim({ className, ...props }) {
    return _jsx("div", { className: cx('awm-modal-scrim', className), ...props });
}
export function Modal({ className, ...props }) {
    return _jsx("div", { className: cx('awm-modal', className), role: "dialog", "aria-modal": "true", ...props });
}
export function ModalHeader({ className, ...props }) {
    return _jsx("div", { className: cx('awm-modal__header', className), ...props });
}
export function ModalTitle({ className, ...props }) {
    return _jsx("h2", { className: cx('awm-modal__title', className), ...props });
}
export function ModalBody({ className, ...props }) {
    return _jsx("div", { className: cx('awm-modal__body', className), ...props });
}
export function ModalFooter({ className, ...props }) {
    return _jsx("div", { className: cx('awm-modal__footer', className), ...props });
}
export function Toast({ icon, title, className, children, ...props }) {
    return (_jsxs("div", { className: cx('awm-toast', className), role: "status", ...props, children: [icon ? _jsx("span", { className: "awm-toast__icon", children: icon }) : null, _jsxs("div", { className: "awm-toast__body", children: [title ? _jsx("strong", { className: "awm-toast__title", children: title }) : null, children ? _jsx("span", { className: "awm-toast__msg", children: children }) : null] })] }));
}
export function TableWrap({ className, ...props }) {
    return _jsx("div", { className: cx('awm-table-wrap', className), ...props });
}
export function Table({ className, ...props }) {
    return _jsx("table", { className: cx('awm-table', className), ...props });
}
export function Empty({ className, ...props }) {
    return _jsx("div", { className: cx('awm-empty', className), ...props });
}
export function EmptyIcon({ className, ...props }) {
    return _jsx("div", { className: cx('awm-empty__icon', className), ...props });
}
export function EmptyTitle({ className, ...props }) {
    return _jsx("h3", { className: cx('awm-empty__title', className), ...props });
}
export function EmptyBody({ className, ...props }) {
    return _jsx("p", { className: cx('awm-empty__body', className), ...props });
}
export function EmptyActions({ className, ...props }) {
    return _jsx("div", { className: cx('awm-empty__actions', className), ...props });
}
