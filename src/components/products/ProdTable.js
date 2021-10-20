import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";


export default () =>{
    const Heading = tw(SectionHeading)``;
    const Subheading = tw(SubheadingBase)`text-center mb-3`;
    const Description = tw(SectionDescription)`text-center mx-auto`;

    
    return(

        <table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 text-6xl py-2">Title</th>
      <th class="px-4 text-6xl py-2">Author</th>
      <th class="px-4 text-6xl py-2">Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border text-6xl  px-10 py-2">Intro to CSS</td>
      <td class="border text-6xl  px-10 py-2">Adam</td>
      <td class="border text-6xl  px-4 py-2">858</td>
    </tr> 
    <tr class="bg-gray-100">
      <td class="border text-4xl  px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td class="border text-4xl  px-4 py-2">Adam</td>
      <td class="border text-4xl  px-4 py-2">112</td>
    </tr> 
    <tr> 
      <td class="border text-4xl  px-4 py-2">Intro to JavaScript</td>
      <td class="border text-4xl  px-4 py-2">Chris</td>
      <td class="border text-4xl  px-4 py-2">1,280</td>
    </tr>
  </tbody>
</table>


    );
};