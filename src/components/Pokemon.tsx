import PropTypes from 'prop-types';
import React from 'react';

export default function Pokemon({ title }: { title: string }) {
    return (
        <div className="h-[80vh] w-full rounded-tl-3xl rounded-tr-3xl bg-white relative z-50">
            {title}
        </div>
    );
}

Pokemon.propTypes = {
    title: PropTypes.string
}
