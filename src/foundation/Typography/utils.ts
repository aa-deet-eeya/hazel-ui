import { css } from "styled-components";
import { latin } from "@bbc/gel-foundations/scripts";
import {
  getFoolscap,
  getCanon,
  getTrafalgar,
  getParagon,
  getDoublePica,
  getGreatPrimer,
  getPica,
  getBodyCopy,
  getLongPrimer,
  getBrevier,
} from "@bbc/gel-foundations/typography";

import { MediaQuery } from "../MediaQuery";
import { Theme } from "../Theme";

import { letterSpacing } from "./responsive";
import { TextType } from "./types";

export function applyTextVariant(variant: TextType) {
  switch (variant) {
    case "display":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getFoolscap(latin)};
      `;

    case "h1":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getCanon(latin)};
      `;

    case "h2":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getTrafalgar(latin)};
      `;

    case "h3":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getParagon(latin)};
      `;

    case "h4":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getDoublePica(latin)};
      `;

    case "h5":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getGreatPrimer(latin)};
      `;

    case "h6":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getPica(latin)};
      `;

    case "p":
      return css`
        font-family: ${Theme.font.sansSerif};
        font-weight: ${Theme.fontWeight.regular};
        ${getBodyCopy(latin)};
      `;

    case "caption":
      return css`
        font-family: ${Theme.font.sansSerif};
        font-weight: ${Theme.fontWeight.regular};
        ${getLongPrimer(latin)};
      `;

    case "label":
      return css`
        font-family: ${Theme.font.sansSerif};
        font-weight: ${Theme.fontWeight.regular};
        ${getBrevier(latin)};
        /* ${applyTextMediaQueries("label")}; */
      `;

    default:
      return null;
  }
}

function applyTextMediaQueries(variant: TextType) {
  return `
    letter-spacing: ${letterSpacing[variant].mobileSmall};

    ${MediaQuery.minWidth.mobile} {
      letter-spacing: ${letterSpacing[variant].mobile};
    }

    ${MediaQuery.minWidth.tablet} {
      letter-spacing: ${letterSpacing[variant].tablet};
    }

    ${MediaQuery.minWidth.desktop} {
      letter-spacing: ${letterSpacing[variant].desktop};
    }

    ${MediaQuery.minWidth.desktopLarge} {
      letter-spacing: ${letterSpacing[variant].desktopLarge};
    }
  `;
}
