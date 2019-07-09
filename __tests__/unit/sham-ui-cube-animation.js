import renderer from 'sham-ui-test-helpers';
import ShamUiCubeAnimation from '../../src/sham-ui-cube-animation.sht';

it( 'renders correctly', () => {
    const meta = renderer( ShamUiCubeAnimation, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );
