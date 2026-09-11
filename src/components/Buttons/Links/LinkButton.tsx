import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    icon?: React.ReactNode;
    to?: string;
}

export default function LinkButton({ text, icon, href, to, ...restProps }: LinkButtonProps) {
    const content = (
        <>
            {icon && (
                <span className="relative z-10 flex items-center justify-center text-text-muted transition-colors duration-300 group-hover:text-primary-hover">
                    {icon}
                </span>
            )}
            <span className="relative z-10 font-roboto text-[18px] font-bold tracking-wide text-text-sidebar">
                {text}
            </span>
            <svg
                width="15px"
                height="10px"
                viewBox="0 0 13 10"
                className="arrow relative top-[1px] fill-none stroke-linecap-round stroke-linejoin-round stroke-text-sidebar stroke-[3] transition-all duration-300 group-hover:translate-x-2"
            >
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </>
    );

    const baseClasses =
        'relative inline-flex items-center gap-2 no-underline group active:scale-95 transition-transform duration-100';

    if (to !== undefined) {
        return (
            <Link to={to} className={baseClasses} {...restProps}>
                <span className="absolute top-0 left-0 h-[45px] w-[45px] rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                {content}
            </Link>
        );
    }

    return (
        <a href={href} className={baseClasses} {...restProps}>
            <span className="absolute top-0 left-0 h-[45px] w-[45px] rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            {content}
        </a>
    );
}
