import PropTypes from 'prop-types';

export default function Heading({ title } : { title: string }) {
    return <h1 className="text-5xl font-bold text-primary">
        {title}
    </h1>;
}

Heading.propTypes = {
    title: PropTypes.string
}