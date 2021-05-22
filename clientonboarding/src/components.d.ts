/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ProfilePage {
        "color": string;
        "profileId": string;
    }
}
declare global {
    interface HTMLProfilePageElement extends Components.ProfilePage, HTMLStencilElement {
    }
    var HTMLProfilePageElement: {
        prototype: HTMLProfilePageElement;
        new (): HTMLProfilePageElement;
    };
    interface HTMLElementTagNameMap {
        "profile-page": HTMLProfilePageElement;
    }
}
declare namespace LocalJSX {
    interface ProfilePage {
        "color"?: string;
        "profileId"?: string;
    }
    interface IntrinsicElements {
        "profile-page": ProfilePage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "profile-page": LocalJSX.ProfilePage & JSXBase.HTMLAttributes<HTMLProfilePageElement>;
        }
    }
}