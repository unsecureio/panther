/**
 * Panther is a Cloud-Native SIEM for the Modern Security Team.
 * Copyright (C) 2020 Panther Labs Inc
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import urls from 'Source/urls';
import {
  Button,
  DropdownButton,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownLink,
} from 'pouncejs';
import { Link as RRLink } from 'react-router-dom';
import useSidesheet from 'Hooks/useSidesheet';
import { SIDESHEETS } from 'Components/utils/Sidesheet';

const CreateButton: React.FC = () => {
  const { showSidesheet } = useSidesheet();

  return (
    <Dropdown>
      <DropdownButton as={Button} icon="add">
        Create New
      </DropdownButton>
      <DropdownMenu alignment="match-width">
        <DropdownLink as={RRLink} to={urls.compliance.policies.create()}>
          Single
        </DropdownLink>
        <DropdownItem
          onSelect={() =>
            showSidesheet({
              sidesheet: SIDESHEETS.POLICY_BULK_UPLOAD,
              props: { type: 'policy' },
            })
          }
        >
          Bulk
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CreateButton;
