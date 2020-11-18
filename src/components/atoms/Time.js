import moment from 'moment';
import PropTypes from 'prop-types';

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return <span className="time">{timeString}</span>
};

export const timeValidation = PropTypes.string.isRequired

Time.propTypes = {
    time: timeValidation,
}

export default Time


