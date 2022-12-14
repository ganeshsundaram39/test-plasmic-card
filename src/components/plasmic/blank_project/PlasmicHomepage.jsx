// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: coHpavefczHPfAyz7pb4WP
// Component: xwX8AWoIasS9
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Card2 from "../../Card2"; // plasmic-import: 6ZOMyZTjGt/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: coHpavefczHPfAyz7pb4WP/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: xwX8AWoIasS9/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <div
            data-plasmic-name={"iPhone1313Pro1"}
            data-plasmic-override={overrides.iPhone1313Pro1}
            className={classNames(projectcss.all, sty.iPhone1313Pro1)}
          >
            <div
              data-plasmic-name={"rectangle1"}
              data-plasmic-override={overrides.rectangle1}
              className={classNames(projectcss.all, sty.rectangle1)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___24Ciw
              )}
            >
              {"Exxonverse"}
            </div>

            <a
              data-plasmic-name={"rectangle2"}
              data-plasmic-override={overrides.rectangle2}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.rectangle2
              )}
            >
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__maXfx
                )}
                href={"https://www.plasmic.app/"}
              >
                <React.Fragment>
                  <React.Fragment>{"test"}</React.Fragment>
                  {
                    <a
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__rSwmA
                      )}
                      href={"www.google.com"}
                    >
                      {"www.google.com"}
                    </a>
                  }

                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </a>
            </a>

            <div
              data-plasmic-name={"rectangle3"}
              data-plasmic-override={overrides.rectangle3}
              className={classNames(projectcss.all, sty.rectangle3)}
            />

            <div
              data-plasmic-name={"image1"}
              data-plasmic-override={overrides.image1}
              className={classNames(projectcss.all, sty.image1)}
            />

            <Card2
              data-plasmic-name={"card2"}
              data-plasmic-override={overrides.card2}
              className={classNames("__wab_instance", sty.card2)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nttvd
              )}
            >
              {"Enter some text"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "iPhone1313Pro1",
    "rectangle1",
    "rectangle2",
    "rectangle3",
    "image1",
    "card2"
  ],

  iPhone1313Pro1: [
    "iPhone1313Pro1",
    "rectangle1",
    "rectangle2",
    "rectangle3",
    "image1",
    "card2"
  ],

  rectangle1: ["rectangle1"],
  rectangle2: ["rectangle2"],
  rectangle3: ["rectangle3"],
  image1: ["image1"],
  card2: ["card2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iPhone1313Pro1: makeNodeComponent("iPhone1313Pro1"),
    rectangle1: makeNodeComponent("rectangle1"),
    rectangle2: makeNodeComponent("rectangle2"),
    rectangle3: makeNodeComponent("rectangle3"),
    image1: makeNodeComponent("image1"),
    card2: makeNodeComponent("card2"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
