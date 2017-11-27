import reducer from './ducks';
import saga from './saga';
import connect from './connect';
import component from './Container';

export { reducer, saga };
export default connect(component);
