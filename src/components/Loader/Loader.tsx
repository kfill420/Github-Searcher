import { Dimmer, Loader as SemLoader, Image, Segment } from 'semantic-ui-react';

function Loader() {
  return (
    <>
      <Segment>
        <Dimmer active>
          <SemLoader content="Loading" />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
      <Segment>
        <Dimmer active inverted>
          <SemLoader inverted content="Loading" />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    </>
  );
}

export default Loader;
