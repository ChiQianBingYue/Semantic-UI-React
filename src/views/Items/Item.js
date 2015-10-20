import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import customPropTypes from '../../utils/customPropTypes';

export default class Item extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    description: customPropTypes.mutuallyExclusive(['children']),
    extra: PropTypes.node,
    heading: PropTypes.node.isRequired,
    image: PropTypes.node,
    meta: PropTypes.node,
  };

  render() {
    let heading = <div className='header'>{this.props.heading}</div>;
    let meta = <div className='meta'>{this.props.meta}</div>;
    let description = <div className='description'>{this.props.children || this.props.description}</div>;
    let extra = <div className='extra'>{this.props.extra}</div>;
    let content = (
      <div className='middle aligned content'>
        {this.props.heading && heading}
        {this.props.meta && meta}
        {this.props.children && description || this.props.description && description}
        {this.props.extra && extra}
      </div>
    );
    let hasContent = !!this.props.heading || !!this.props.meta || !!this.props.extra || !!this.props.children
    || !!this.props.description;

    let classes = classNames(
      'sd-item',
      this.props.className,
      'item',
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.image}
        {hasContent && content}
      </div>
    );
  }
}
