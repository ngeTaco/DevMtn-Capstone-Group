function ItemboxModal() {
    const Modal = ({ isOpen, onClose, children }) => {
        if (!isOpen) return null;
      
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <div className="flex justify-end">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={onClose}
                >
                  &times;
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        );
      };
}
export default ItemboxModal