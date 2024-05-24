import { Children } from 'react';
import * as S from './Breadcrumb.styles';

export type BreadcrumbPath = {
	name: string;
	url: string;
};

export type BreadcrumbProps = {
	paths: BreadcrumbPath[];
};

export const Breadcrumb = ({ paths }: BreadcrumbProps) => {
	return (
		<S.Wrapper>
			{Children.toArray(
				paths.map(({ name, url }, index) => {
					const lastElement = index + 1 === paths.length;

					return (
						<S.Path $bold={lastElement} href={url}>
							{name} {lastElement ? '' : `/`}
						</S.Path>
					);
				}),
			)}
		</S.Wrapper>
	);
};
