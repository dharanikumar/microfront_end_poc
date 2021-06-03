/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface OnboardingPage {
        "color": string;
        "profileId": string;
    }
}
declare global {
    interface HTMLOnboardingPageElement extends Components.OnboardingPage, HTMLStencilElement {
    }
    var HTMLOnboardingPageElement: {
        prototype: HTMLOnboardingPageElement;
        new (): HTMLOnboardingPageElement;
    };
    interface HTMLElementTagNameMap {
        "onboarding-page": HTMLOnboardingPageElement;
    }
}
declare namespace LocalJSX {
    interface OnboardingPage {
        "color"?: string;
        "profileId"?: string;
    }
    interface IntrinsicElements {
        "onboarding-page": OnboardingPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "onboarding-page": LocalJSX.OnboardingPage & JSXBase.HTMLAttributes<HTMLOnboardingPageElement>;
        }
    }
}
