const { useEffect } = require("react");

const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Grand Dental`;
  }, [title]);
};

export default useDynamicTitle;
