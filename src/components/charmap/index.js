/**
 * External dependencies
 */
import React, { Component, Fragment } from 'react';
import { map, upperFirst } from 'lodash';
import './style.scss';

/**
 * Internal dependencies
 */
import Chars from './characters.json';
import SimpleSnackbar from '../snackbar';

/**
 * WordPress dependencies
 */
import { Button, TabPanel, TextControl, Tooltip, ClipboardButton } from '@wordpress/components';

class Charmap extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      characters: Chars.Misc,
	  keyword: '',
	  date: '',
	  message: '',
	  copied: false,
    };
  }

  onSearch(keyword) {
    let filtered = {};

    map(Chars, characters => {
      map(characters, (character, key) => {
        if (character.name.toLowerCase().search(keyword.toLowerCase()) !== -1) {
          filtered = Object.assign({ [key]: character }, filtered);
        }
      });
    });

    this.setState({ keyword, characters: filtered });
  }

  render() {
    const { name, value, isActive, onChange } = this.props;
    const { characters, keyword, copied, date, message } = this.state;

    const onSelect = tab => {
      const tabContent = typeof Chars[tab] !== 'undefined' ? Chars[tab] : {};
      this.setState({ characters: tabContent, keyword: '' });
    };

    let container = 'editorskit-charmap-popover';

    if (keyword) {
      container += ' is-searching';
    }

    return (
      <Fragment>
        <div className={container}>
          <TextControl
            value={keyword}
            placeholder={'Search'}
            onChange={newKeyword => {
              this.onSearch(newKeyword);
            }}
          />
          <TabPanel
            className="editorskit-charmap-tabpanel"
            activeClass="is-active-tab"
            onSelect={onSelect}
            tabs={[
              {
                name: 'Misc',
                title: 'Misc',
                className: 'editorskit-charmap-misc'
              },
              {
                name: 'Math',
                title: 'Math',
                className: 'editorskit-charmap-math'
              },
              {
                name: 'Latin',
                title: 'Latin',
                className: 'editorskit-charmap-latin'
              },
              {
                name: 'Arrows',
                title: 'Arrows',
                className: 'editorskit-charmap-arrows'
              }
            ]}
          >
            {() => {
              return (
                <Fragment>
                  {Object.keys(characters).length > 0 ? (
                    <ul className="editorskit-charmap-list">
                      {map(characters, (character, key) => {
                        return (
                          <li key={'editorskit-charmap-' + key}>
                            <Tooltip
                              text={upperFirst(character.name.toLowerCase())}
                            >
                              <ClipboardButton
                                text={character.char}
                                onCopy={() => {
									this.setState({
										copied: true,
										date: new Date(),
										message: 'Copied ' + character.char + ' to your clipboard.'
									});
                                }}
                              >
                                {character.char}
                              </ClipboardButton>
                            </Tooltip>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p>{'No characters found.'}</p>
                  )}
                </Fragment>
              );
            }}
          </TabPanel>
        </div>
        {copied ? <SimpleSnackbar key={date} status={message} /> : null}
      </Fragment>
    );
  }
}

export default Charmap;