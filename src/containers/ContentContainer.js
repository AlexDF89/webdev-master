import { connect } from 'react-redux';

import { getActiveContent } from '../reducers';
import Content from '../components/Content';

function mapStateToProps(state) {
  return {
    content: getActiveContent(state)
  }
}

const ContentContainer = connect(mapStateToProps)(Content);

export default ContentContainer;