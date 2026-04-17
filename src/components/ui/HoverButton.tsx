import React from 'react';
import styled from 'styled-components';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a" | "span";
  href?: string;
  target?: string;
  rel?: string;
}

const HoverButton: React.FC<ButtonProps> = ({ children, className, type = "button", as = "button", href, ...props }) => {
  return (
    <StyledWrapper style={{ display: className?.includes('w-full') ? 'block' : 'inline-block' }}>
      {as === "a" ? (
        <a href={href} className={cn("btn-inner", className)} {...(props as any)}>
          {children}
        </a>
      ) : as === "span" ? (
        <span className={cn("btn-inner", className)} {...(props as any)}>
          {children}
        </span>
      ) : (
        <button type={type} className={cn("btn-inner", className)} {...props}>
          {children}
        </button>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: inline-block;

  .btn-inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    min-width: 12em;
    padding: 0 1.5em;
    position: relative;
    height: 3.5em;
    border: 2px solid hsl(var(--primary));
    outline: none;
    background-color: transparent;
    color: hsl(var(--foreground));
    transition: all 0.3s ease-in-out;
    border-radius: 14px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    font-family: var(--font-body);
    overflow: hidden;
    z-index: 1;
  }

  .btn-inner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: hsl(var(--primary) / 0.15);
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }

  .btn-inner:hover::before {
    width: 100%;
  }

  .btn-inner:hover {
    box-shadow: inset 0px 0px 15px hsl(var(--primary) / 0.4), 0px 0px 15px hsl(var(--primary) / 0.4);
    transform: translateY(-2px);
  }
`;

export default HoverButton;
