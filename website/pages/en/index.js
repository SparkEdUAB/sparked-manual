/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}
function link(url){
  return url
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="">
    <img src={props.img_src} style={{maxWidth:140}}/>
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('sp6.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('intro.html', language)}>Administrators</Button>
            <Button href={docUrl('homePage.html', language)}>Students and Users</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Ability to organize contents following the University structure',
        image: imgUrl('school.svg'),
        imageAlign: 'top',
        title: 'University Based',
      },
      {
        content: 'Organize Contents for Colleges with Different Courses',
        image: imgUrl('course.svg'),
        imageAlign: 'top',
        title: 'Course Based',
      },
      {
        content: 'Contents can also be arranged as High Schools to help small schools manage their contents',
        image: imgUrl('highschool.svg'),
        imageAlign: 'top',
        title: 'High School',
      },
    ]}
  </Block>
);


const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'In Ethiopia SparkEd was depolyed on a server and it loaded more than 1,500 resources. It worked very well and was tested with more than 20 hosts.',
        imageAlign: 'right',
        title: 'Current Usage',
      },
    ]}
  </Block>
);
const Maintainer = props => (
  <Block background="light">
    {[
      {
        content: `This project is maintained by a dedicated group of people, led by [OlivierJM](https://github.com/olivierjm)`,
        imageAlign: 'right',
        title: 'Maintenance',
      },
    ]}
  </Block>
);


class Index extends React.Component {
  componentDidMount(){
    const header = document.getElementsByClassName('headerTitle');
    header[0].innerText = 'SparkEd';
  }
  render() {
    let language = this.props.language || '';
    
    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          {/*
          Temporary disabled the unecessary components on the landing Page
          <FeatureCallout />
          <Description /> 
        */}
        <LearnHow />
        <Maintainer />
        </div>
      </div>
    );
  }
}

module.exports = Index;
