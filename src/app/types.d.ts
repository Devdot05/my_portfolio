declare module 'aos' {
    const AOS: {
      init: (options?: {
        duration?: number;
        easing?: string;
        offset?: number;
        once?: boolean;
      }) => void;
    };
    export default AOS;
  }
  