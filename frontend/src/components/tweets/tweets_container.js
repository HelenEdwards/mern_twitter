import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import Tweets from './tweets';

const mSTP = state => ({
    tweets: Object.values(state.tweets.all)
});

const mDTP = dispatch => ({
    fetchTweets: () => dispatch(fetchTweets())
});

export default connect(mSTP, mDTP)(Tweets);