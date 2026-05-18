/**
 * @amlplugins/google-ads
 *
 * Thin namespaced re-export of the native google-ads-api SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Google Ads (community SDK).
 */

import * as _sdk from "google-ads-api";
export * from "google-ads-api";
export { _sdk as sdk };
export default _sdk;
