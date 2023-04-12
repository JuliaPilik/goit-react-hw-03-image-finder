import React from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  state = {
    keyword: '',
  };
  handleChange = event => {
    this.setState({ keyword: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.keyword.trim() === '') {
      alert('Введите поисковое слово');
      return;
    }
    this.props.onSubmit(this.state.keyword);
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            name="keyword"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.keyword}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
