import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorPage } from './ErrorPage';
import error400Svg from '../../assets/svg/error-400-sega.svg';
import error401Svg from '../../assets/svg/error-401-sega.svg';
import error403Svg from '../../assets/svg/error-403-sega.svg';
import error404Svg from '../../assets/svg/error-404-sega.svg';
import error408Svg from '../../assets/svg/error-408-sega.svg';
import error429Svg from '../../assets/svg/error-429-sega.svg';
import error500Svg from '../../assets/svg/error-500-sega.svg';
import error502Svg from '../../assets/svg/error-502-sega.svg';
import error503Svg from '../../assets/svg/error-503-sega.svg';
import error504Svg from '../../assets/svg/error-504-sega.svg';

const meta: Meta<typeof ErrorPage> = {
  title: 'Components/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Error404: Story = {
  args: {
    code: 404,
    title: 'Page Not Found',
    description:
      'Looks like someone took a wrong turn at the digital crossroads. The page went on vacation without leaving a forwarding address!',
    characterUrl: error404Svg,
    characterAlt: 'Lost Traveler',
    info: [
      { label: 'STATUS', value: 'HTTP 404 NOT FOUND', highlight: true },
      { label: 'PATH', value: '/unknown' },
      { label: 'RESULT', value: 'File not found', highlight: true },
    ],
  },
};

export const Error403: Story = {
  args: {
    code: 403,
    title: 'Forbidden',
    description: 'You do not have permission to access this resource.',
    characterUrl: error403Svg,
    characterAlt: 'Forbidden',
    info: [
      { label: 'STATUS', value: 'HTTP 403 FORBIDDEN', highlight: true },
      { label: 'RESULT', value: 'Access denied', highlight: true },
    ],
  },
};

export const Error500: Story = {
  args: {
    code: 500,
    title: 'Internal Server Error',
    description: 'Something went wrong on our end. We are working to fix it.',
    characterUrl: error500Svg,
    characterAlt: 'Server Error',
    info: [
      { label: 'STATUS', value: 'HTTP 500 INTERNAL SERVER ERROR', highlight: true },
      { label: 'RESULT', value: 'Server error', highlight: true },
    ],
  },
};

export const Error502: Story = {
  args: {
    code: 502,
    title: 'Bad Gateway',
    description: 'The server received an invalid response from an upstream server.',
    characterUrl: error502Svg,
    characterAlt: 'Bad Gateway',
    info: [{ label: 'STATUS', value: 'HTTP 502 BAD GATEWAY', highlight: true }],
  },
};

export const Error503: Story = {
  args: {
    code: 503,
    title: 'Service Unavailable',
    description: 'The service is temporarily unavailable. Please try again later.',
    characterUrl: error503Svg,
    characterAlt: 'Service Unavailable',
    info: [{ label: 'STATUS', value: 'HTTP 503 SERVICE UNAVAILABLE', highlight: true }],
  },
};

export const Error400: Story = {
  args: {
    code: 400,
    title: 'Bad Request',
    description: 'The request could not be understood by the server due to malformed syntax.',
    characterUrl: error400Svg,
    characterAlt: 'Bad Request',
    info: [
      { label: 'STATUS', value: 'HTTP 400 BAD REQUEST', highlight: true },
      { label: 'RESULT', value: 'Invalid request format', highlight: true },
    ],
  },
};

export const Error401: Story = {
  args: {
    code: 401,
    title: 'Unauthorized',
    description: 'Authentication is required to access this resource.',
    characterUrl: error401Svg,
    characterAlt: 'Unauthorized',
    info: [
      { label: 'STATUS', value: 'HTTP 401 UNAUTHORIZED', highlight: true },
      { label: 'RESULT', value: 'Authentication required', highlight: true },
    ],
  },
};

export const Error408: Story = {
  args: {
    code: 408,
    title: 'Request Timeout',
    description: 'The server timed out waiting for the request.',
    characterUrl: error408Svg,
    characterAlt: 'Request Timeout',
    info: [
      { label: 'STATUS', value: 'HTTP 408 REQUEST TIMEOUT', highlight: true },
      { label: 'RESULT', value: 'Request timed out', highlight: true },
    ],
  },
};

export const Error429: Story = {
  args: {
    code: 429,
    title: 'Too Many Requests',
    description: 'You have sent too many requests in a given amount of time. Please try again later.',
    characterUrl: error429Svg,
    characterAlt: 'Too Many Requests',
    info: [
      { label: 'STATUS', value: 'HTTP 429 TOO MANY REQUESTS', highlight: true },
      { label: 'RESULT', value: 'Rate limit exceeded', highlight: true },
    ],
  },
};

export const Error504: Story = {
  args: {
    code: 504,
    title: 'Gateway Timeout',
    description: 'The server acting as a gateway did not receive a timely response.',
    characterUrl: error504Svg,
    characterAlt: 'Gateway Timeout',
    info: [
      { label: 'STATUS', value: 'HTTP 504 GATEWAY TIMEOUT', highlight: true },
      { label: 'RESULT', value: 'Gateway timeout', highlight: true },
    ],
  },
};

export const WithoutCharacter: Story = {
  args: {
    code: 404,
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    info: [{ label: 'STATUS', value: 'HTTP 404 NOT FOUND', highlight: true }],
  },
};

export const WithoutInfo: Story = {
  args: {
    code: 404,
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    characterUrl: error404Svg,
  },
};
