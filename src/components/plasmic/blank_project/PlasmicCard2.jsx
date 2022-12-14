// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: coHpavefczHPfAyz7pb4WP
// Component: 6ZOMyZTjGt
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: coHpavefczHPfAyz7pb4WP/projectcss
import sty from "./PlasmicCard2.module.css"; // plasmic-import: 6ZOMyZTjGt/css

export const PlasmicCard2__VariantProps = new Array();

export const PlasmicCard2__ArgProps = new Array();

function PlasmicCard2__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(
          projectcss.all,
          projectcss.h1,
          projectcss.__wab_text,
          sty.h1
        )}
      >
        <React.Fragment>
          <React.Fragment>{""}</React.Fragment>
          {
            <h4
              data-plasmic-name={"h4"}
              data-plasmic-override={overrides.h4}
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4
              )}
            >
              {"Head"}
            </h4>
          }

          <React.Fragment>{""}</React.Fragment>
        </React.Fragment>
      </h1>

      <a
        className={classNames(
          projectcss.all,
          projectcss.a,
          projectcss.__wab_text,
          sty.link__gfhlX
        )}
        href={"https://www.plasmic.app/"}
      >
        <React.Fragment>
          <React.Fragment>{""}</React.Fragment>
          {
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                projectcss.plasmic_default__inline,
                sty.link__bsIiw
              )}
              href={"www.google.com"}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link___1Bnrz
                    )}
                    href={"www.google.com"}
                  >
                    {""}
                  </a>
                }

                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </a>
          }

          <React.Fragment>{""}</React.Fragment>
        </React.Fragment>
      </a>

      <p
        data-plasmic-name={"p"}
        data-plasmic-override={overrides.p}
        className={classNames(
          projectcss.all,
          projectcss.p,
          projectcss.__wab_text,
          sty.p
        )}
      >
        {"demo text"}
      </p>

      <a
        className={classNames(
          projectcss.all,
          projectcss.a,
          projectcss.__wab_text,
          sty.link__yNu45
        )}
        href={"https://www.plasmic.app/"}
      >
        {"Some link text"}
      </a>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "h1", "h4", "p"],
  h1: ["h1", "h4"],
  h4: ["h4"],
  p: ["p"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCard2__ArgProps,
          internalVariantPropNames: PlasmicCard2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCard2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCard2";
  } else {
    func.displayName = `PlasmicCard2.${nodeName}`;
  }
  return func;
}

export const PlasmicCard2 = Object.assign(
  // Top-level PlasmicCard2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    h4: makeNodeComponent("h4"),
    p: makeNodeComponent("p"),
    // Metadata about props expected for PlasmicCard2
    internalVariantProps: PlasmicCard2__VariantProps,
    internalArgProps: PlasmicCard2__ArgProps
  }
);

export default PlasmicCard2;
/* prettier-ignore-end */
