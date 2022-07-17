/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Tags = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.21715 3.12863C9.28812 2.72054 9.01483 2.33219 8.60675 2.26121C8.19866 2.19024 7.8103 2.46353 7.73933 2.87162L7.15932 6.20667H3C2.58579 6.20667 2.25 6.54245 2.25 6.95667C2.25 7.37088 2.58579 7.70667 3 7.70667H6.89845L6.10073 12.2936H3C2.58579 12.2936 2.25 12.6294 2.25 13.0436C2.25 13.4578 2.58579 13.7936 3 13.7936H5.83986L5.30455 16.8716C5.23358 17.2797 5.50686 17.6681 5.91495 17.739C6.32304 17.81 6.71139 17.5367 6.78237 17.1286L7.36237 13.7936H10.7964L10.2611 16.8719C10.1901 17.2799 10.4634 17.6683 10.8715 17.7393C11.2796 17.8102 11.6679 17.537 11.7389 17.1289L12.319 13.7936H17C17.4142 13.7936 17.75 13.4578 17.75 13.0436C17.75 12.6294 17.4142 12.2936 17 12.2936H12.5798L13.3776 7.70667H17C17.4142 7.70667 17.75 7.37088 17.75 6.95667C17.75 6.54245 17.4142 6.20667 17 6.20667H13.6384L14.1737 3.12887C14.2447 2.72078 13.9714 2.33243 13.5633 2.26146C13.1552 2.19048 12.7668 2.46377 12.6959 2.87186L12.1159 6.20667H8.68184L9.21715 3.12863ZM8.42097 7.70667L7.62324 12.2936H11.0573L11.855 7.70667H8.42097Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Tags.displayName = 'Tags';
Tags.propTypes = {
  size: PropTypes.string
}
export default Tags;
/* tslint:enable */
/* eslint-enable */
