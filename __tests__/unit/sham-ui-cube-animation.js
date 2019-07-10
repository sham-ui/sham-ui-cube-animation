import renderer from 'sham-ui-test-helpers';
import ShamUiCubeAnimation from '../../src/sham-ui-cube-animation.sfc';

it( 'renders correctly', () => {
    const meta = renderer( ShamUiCubeAnimation, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );
