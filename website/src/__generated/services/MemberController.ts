import type { Executor } from '../';
import type { MemberInput, MemberProfileInput, Unit } from '../model/static';

export class MemberController {
    
    constructor(private executor: Executor) {}
    
    async profiles(options: MemberControllerOptions['profiles']): Promise<
        Unit
    > {
        let _uri = '/member/profiles';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.memberProfileInput.avatar;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'avatar='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.bilibili;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'bilibili='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.birthday;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'birthday='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.description;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'description='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.email;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'email='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.github;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'github='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.id;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'id='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.location;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'location='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.memberId;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'memberId='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.nickname;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'nickname='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.roleId;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'roleId='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.memberProfileInput.website;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'website='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.page;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'page='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.size;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'size='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        return (await this.executor({uri: _uri, method: 'GET'})) as Unit
    }
    
    async put(options: MemberControllerOptions['put']): Promise<
        Unit
    > {
        let _uri = '/member/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as Unit
    }
}

export type MemberControllerOptions = {
    'profiles': {
        readonly page?: number, 
        readonly size?: number, 
        readonly memberProfileInput: MemberProfileInput
    },
    'put': {readonly body: MemberInput}
}