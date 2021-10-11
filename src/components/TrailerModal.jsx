import React from 'react';
import ModalVideo from 'react-modal-video';

const TrailerModal = ({ isOpen, setIsOpen, videoId }) => {
    return (
        <ModalVideo
            channel='youtube'
            isOpen={isOpen}
            videoId={videoId}
            onClose={setIsOpen.bind(this, false)}
        />
    );
};

export default TrailerModal;
